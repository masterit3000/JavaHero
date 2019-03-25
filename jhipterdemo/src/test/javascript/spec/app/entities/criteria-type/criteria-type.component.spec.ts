/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

import { DemoJavaHerooooTestModule } from '../../../test.module';
import { CriteriaTypeComponent } from 'app/entities/criteria-type/criteria-type.component';
import { CriteriaTypeService } from 'app/entities/criteria-type/criteria-type.service';
import { CriteriaType } from 'app/shared/model/criteria-type.model';

describe('Component Tests', () => {
    describe('CriteriaType Management Component', () => {
        let comp: CriteriaTypeComponent;
        let fixture: ComponentFixture<CriteriaTypeComponent>;
        let service: CriteriaTypeService;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [DemoJavaHerooooTestModule],
                declarations: [CriteriaTypeComponent],
                providers: []
            })
                .overrideTemplate(CriteriaTypeComponent, '')
                .compileComponents();

            fixture = TestBed.createComponent(CriteriaTypeComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(CriteriaTypeService);
        });

        it('Should call load all on init', () => {
            // GIVEN
            const headers = new HttpHeaders().append('link', 'link;link');
            spyOn(service, 'query').and.returnValue(
                of(
                    new HttpResponse({
                        body: [new CriteriaType(123)],
                        headers
                    })
                )
            );

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.query).toHaveBeenCalled();
            expect(comp.criteriaTypes[0]).toEqual(jasmine.objectContaining({ id: 123 }));
        });
    });
});
