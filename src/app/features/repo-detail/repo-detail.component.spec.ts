import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RepoDetailComponent } from './repo-detail.component';
import { ActivatedRoute } from '@angular/router';
import { of, throwError } from 'rxjs';
import { GithubApiService } from 'src/app/core/services/github-api.service';
import { Location } from '@angular/common';
import { Repo } from 'src/app/core/models/repo.model';
import { RouterTestingModule } from '@angular/router/testing';

describe('RepoDetailComponent', () => {
  let component: RepoDetailComponent;
  let fixture: ComponentFixture<RepoDetailComponent>;
  let githubServiceStub: jasmine.SpyObj<GithubApiService>;
  let locationStub: jasmine.SpyObj<Location>;

  const mockRepo: Repo = {
    name: 'test-repo',
    description: 'Repositório de teste',
    stargazers_count: 10,
    html_url: 'https://github.com/test/test-repo',
  };

  beforeEach(async () => {
    githubServiceStub = jasmine.createSpyObj('GithubApiService', [
      'getRepoDetail',
    ]);
    locationStub = jasmine.createSpyObj('Location', ['back']);

    await TestBed.configureTestingModule({
      declarations: [RepoDetailComponent],
      imports: [RouterTestingModule],
      providers: [
        { provide: GithubApiService, useValue: githubServiceStub },
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: (key: string) => {
                  const params: any = {
                    username: 'testuser',
                    repoName: 'test-repo',
                  };
                  return params[key];
                },
              },
            },
          },
        },
        { provide: Location, useValue: locationStub },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepoDetailComponent);
    component = fixture.componentInstance;
  });

  it('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  it('deve buscar os dados do repositório no ngOnInit', () => {
    githubServiceStub.getRepoDetail.and.returnValue(of(mockRepo));

    fixture.detectChanges(); // Trigger ngOnInit

    expect(component.repo).toEqual(mockRepo);
    expect(component.loading).toBeFalse();
    expect(component.error).toBe('');
    expect(githubServiceStub.getRepoDetail).toHaveBeenCalledWith(
      'testuser',
      'test-repo'
    );
  });

  it('deve lidar com erro ao buscar repositório', () => {
    githubServiceStub.getRepoDetail.and.returnValue(
      throwError(() => new Error('Erro'))
    );

    fixture.detectChanges();

    expect(component.repo).toBeNull();
    expect(component.error).toBe('Repositório não encontrado.');
    expect(component.loading).toBeFalse();
  });

  it('deve voltar ao histórico ao chamar goBack()', () => {
    component.goBack();
    expect(locationStub.back).toHaveBeenCalled();
  });
});
