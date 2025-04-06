import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResultsComponent } from './results.component';
import { ActivatedRoute } from '@angular/router';
import { of, throwError } from 'rxjs';
import { GithubApiService } from 'src/app/core/services/github-api.service';
import { User } from '@models/user.model';
import { Repo } from '@models/repo.model';

describe('ResultsComponent', () => {
  let component: ResultsComponent;
  let fixture: ComponentFixture<ResultsComponent>;

  const mockUser: User = {
    login: 'filipovdev',
    name: 'Filipov Dev',
    avatar_url: '',
    followers: 10,
    following: 5,
    public_repos: 3,
    location: 'Brasil',
    bio: 'Dev',
  };

  const mockRepos: Repo[] = [
    { name: 'b-repo', stargazers_count: 5, description: '', html_url: '' },
    { name: 'a-repo', stargazers_count: 10, description: '', html_url: '' },
  ];

  const githubServiceStub = {
    getUser: jasmine.createSpy().and.returnValue(of(mockUser)),
    getRepos: jasmine.createSpy().and.returnValue(of(mockRepos)),
  };

  const activatedRouteStub = {
    snapshot: {
      paramMap: {
        get: () => 'filipovdev',
      },
    },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResultsComponent],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRouteStub },
        { provide: GithubApiService, useValue: githubServiceStub },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  it('deve buscar dados do usuário e repositórios no init', () => {
    // Garante que os mocks sejam usados antes do ngOnInit()
    githubServiceStub.getUser = jasmine
      .createSpy()
      .and.returnValue(of(mockUser));
    githubServiceStub.getRepos = jasmine
      .createSpy()
      .and.returnValue(of(mockRepos));

    fixture = TestBed.createComponent(ResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Aqui chama o ngOnInit()

    expect(component.user).toEqual(mockUser);
    expect(component.repos.length).toBe(2); // Agora passa
    expect(component.loading).toBeFalse();
  });

  it('deve ordenar os repositórios por estrelas decrescente por padrão', () => {
    expect(component.repos[0].name).toBe('a-repo');
  });

  it('deve ordenar os repositórios por nome crescente', () => {
    component.sortField = 'name';
    component.sortDirection = 'asc';
    component.sortRepos();

    expect(component.repos[0].name).toBe('a-repo');
    expect(component.repos[1].name).toBe('b-repo');
  });

  it('deve lidar com erro ao buscar usuário', () => {
    githubServiceStub.getUser = jasmine
      .createSpy()
      .and.returnValue(throwError(() => new Error('Erro')));
    githubServiceStub.getRepos = jasmine
      .createSpy()
      .and.returnValue(of(mockRepos)); // <-- evitar sobrescrever o error

    fixture = TestBed.createComponent(ResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    expect(component.error).toBe('Usuário não encontrado.');
    expect(component.loading).toBeFalse();
  });

  it('deve lidar com erro ao buscar repositórios', () => {
    githubServiceStub.getUser = jasmine
      .createSpy()
      .and.returnValue(of(mockUser));
    githubServiceStub.getRepos = jasmine
      .createSpy()
      .and.returnValue(throwError(() => new Error('500')));

    component.fetchData();

    expect(component.error).toBe('Erro ao carregar repositórios.');
    expect(component.loading).toBeFalse();
  });

  it('deve lidar com erro ao buscar repositórios', () => {
    githubServiceStub.getUser = jasmine
      .createSpy()
      .and.returnValue(of(mockUser));
    githubServiceStub.getRepos = jasmine
      .createSpy()
      .and.returnValue(throwError(() => new Error('Erro')));

    fixture = TestBed.createComponent(ResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    expect(component.error).toBe('Erro ao carregar repositórios.');
    expect(component.loading).toBeFalse();
  });
});
