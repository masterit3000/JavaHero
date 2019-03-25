/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { DemoJavaHerooooTestModule } from '../../../test.module';
import { CriteriaTypeDetailComponent } from 'app/entities/criteria-type/criteria-type-detail.component';
import { CriteriaType } from 'app/shared/model/criteria-type.model';

describe('Component Tests', () => {
    describe('CriteriaType Management Detail Component', () => {
        let comp: CriteriaTypeDetailComponent;
        let fixture: ComponentFixture<CriteriaTypeDetailComponent>;
        const route = ({ data: of({ criteriaType: new CriteriaType(123) }) } as any) as ActivatedRoute;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [DemoJavaHerooooTestModule],
                declarations: [CriteriaTypeDetailComponent],
                providers: [{ provide: ActivatedRoute, useValue: route }]
            })
                .overrideTemplate(CriteriaTypeDetailComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(CriteriaTypeDetailComponent);
            comp = fixture.componentInstance;
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(comp.criteriaType).toEqual(jasmine.objectContaining({ id: 123 }));
            });
        });
    });
});
