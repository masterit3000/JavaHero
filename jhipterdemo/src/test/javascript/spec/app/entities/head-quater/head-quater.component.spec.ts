/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

import { DemoJavaHerooooTestModule } from '../../../test.module';
import { HeadQuaterComponent } from 'app/entities/head-quater/head-quater.component';
import { HeadQuaterService } from 'app/entities/head-quater/head-quater.service';
import { HeadQuater } from 'app/shared/model/head-quater.model';

describe('Component Tests', () => {
    describe('HeadQuater Management Component', () => {
        let comp: HeadQuaterComponent;
        let fixture: ComponentFixture<HeadQuaterComponent>;
        let service: HeadQuaterService;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [DemoJavaHerooooTestModule],
                declarations: [HeadQuaterComponent],
                providers: []
            })
                .overrideTemplate(HeadQuaterComponent, '')
                .compileComponents();

            fixture = TestBed.createComponent(HeadQuaterComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(HeadQuaterService);
        });

        it('Should call load all on init', () => {
            // GIVEN
            const headers = new HttpHeaders().append('link', 'link;link');
            spyOn(service, 'query').and.returnValue(
                of(
                    new HttpResponse({
                        body: [new HeadQuater(123)],
                        headers
                    })
                )
            );

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.query).toHaveBeenCalled();
            expect(comp.headQuaters[0]).toEqual(jasmine.objectContaining({ id: 123 }));
        });
    });
});
