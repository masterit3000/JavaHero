/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { DemoJavaHerooooTestModule } from '../../../test.module';
import { CriteriaEvaluateDetailComponent } from 'app/entities/criteria-evaluate/criteria-evaluate-detail.component';
import { CriteriaEvaluate } from 'app/shared/model/criteria-evaluate.model';

describe('Component Tests', () => {
    describe('CriteriaEvaluate Management Detail Component', () => {
        let comp: CriteriaEvaluateDetailComponent;
        let fixture: ComponentFixture<CriteriaEvaluateDetailComponent>;
        const route = ({ data: of({ criteriaEvaluate: new CriteriaEvaluate(123) }) } as any) as ActivatedRoute;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [DemoJavaHerooooTestModule],
                declarations: [CriteriaEvaluateDetailComponent],
                providers: [{ provide: ActivatedRoute, useValue: route }]
            })
                .overrideTemplate(CriteriaEvaluateDetailComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(CriteriaEvaluateDetailComponent);
            comp = fixture.componentInstance;
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(comp.criteriaEvaluate).toEqual(jasmine.objectContaining({ id: 123 }));
            });
        });
    });
});
