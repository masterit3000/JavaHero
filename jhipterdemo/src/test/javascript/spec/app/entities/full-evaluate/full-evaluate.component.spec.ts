/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

import { DemoJavaHerooooTestModule } from '../../../test.module';
import { FullEvaluateComponent } from 'app/entities/full-evaluate/full-evaluate.component';
import { FullEvaluateService } from 'app/entities/full-evaluate/full-evaluate.service';
import { FullEvaluate } from 'app/shared/model/full-evaluate.model';

describe('Component Tests', () => {
    describe('FullEvaluate Management Component', () => {
        let comp: FullEvaluateComponent;
        let fixture: ComponentFixture<FullEvaluateComponent>;
        let service: FullEvaluateService;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [DemoJavaHerooooTestModule],
                declarations: [FullEvaluateComponent],
                providers: []
            })
                .overrideTemplate(FullEvaluateComponent, '')
                .compileComponents();

            fixture = TestBed.createComponent(FullEvaluateComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(FullEvaluateService);
        });

        it('Should call load all on init', () => {
            // GIVEN
            const headers = new HttpHeaders().append('link', 'link;link');
            spyOn(service, 'query').and.returnValue(
                of(
                    new HttpResponse({
                        body: [new FullEvaluate(123)],
                        headers
                    })
                )
            );

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.query).toHaveBeenCalled();
            expect(comp.fullEvaluates[0]).toEqual(jasmine.objectContaining({ id: 123 }));
        });
    });
});
