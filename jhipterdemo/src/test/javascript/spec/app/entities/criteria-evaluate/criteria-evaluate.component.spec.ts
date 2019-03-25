/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

import { DemoJavaHerooooTestModule } from '../../../test.module';
import { CriteriaEvaluateComponent } from 'app/entities/criteria-evaluate/criteria-evaluate.component';
import { CriteriaEvaluateService } from 'app/entities/criteria-evaluate/criteria-evaluate.service';
import { CriteriaEvaluate } from 'app/shared/model/criteria-evaluate.model';

describe('Component Tests', () => {
    describe('CriteriaEvaluate Management Component', () => {
        let comp: CriteriaEvaluateComponent;
        let fixture: ComponentFixture<CriteriaEvaluateComponent>;
        let service: CriteriaEvaluateService;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [DemoJavaHerooooTestModule],
                declarations: [CriteriaEvaluateComponent],
                providers: []
            })
                .overrideTemplate(CriteriaEvaluateComponent, '')
                .compileComponents();

            fixture = TestBed.createComponent(CriteriaEvaluateComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(CriteriaEvaluateService);
        });

        it('Should call load all on init', () => {
            // GIVEN
            const headers = new HttpHeaders().append('link', 'link;link');
            spyOn(service, 'query').and.returnValue(
                of(
                    new HttpResponse({
                        body: [new CriteriaEvaluate(123)],
                        headers
                    })
                )
            );

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.query).toHaveBeenCalled();
            expect(comp.criteriaEvaluates[0]).toEqual(jasmine.objectContaining({ id: 123 }));
        });
    });
});
