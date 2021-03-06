import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddTodoFormComponent } from './add-todo-form.component';

describe('AddTodoFormComponent', () => {
  let component: AddTodoFormComponent;
  let fixture: ComponentFixture<AddTodoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddTodoFormComponent],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(AddTodoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
