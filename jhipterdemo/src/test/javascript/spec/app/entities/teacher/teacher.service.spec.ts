/* tslint:disable max-line-length */
import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { of } from 'rxjs';
import { take, map } from 'rxjs/operators';
import * as moment from 'moment';
import { DATE_TIME_FORMAT } from 'app/shared/constants/input.constants';
import { TeacherService } from 'app/entities/teacher/teacher.service';
import { ITeacher, Teacher, TeacherLevel, Status } from 'app/shared/model/teacher.model';

describe('Service Tests', () => {
    describe('Teacher Service', () => {
        let injector: TestBed;
        let service: TeacherService;
        let httpMock: HttpTestingController;
        let elemDefault: ITeacher;
        let currentDate: moment.Moment;
        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [HttpClientTestingModule]
            });
            injector = getTestBed();
            service = injector.get(TeacherService);
            httpMock = injector.get(HttpTestingController);
            currentDate = moment();

            elemDefault = new Teacher(
                0,
                'AAAAAAA',
                'AAAAAAA',
                'AAAAAAA',
                currentDate,
                'AAAAAAA',
                'AAAAAAA',
                'AAAAAAA',
                0,
                0,
                TeacherLevel.TEACHER,
                Status.EXIST,
                'AAAAAAA'
            );
        });

        describe('Service methods', async () => {
            it('should find an element', async () => {
                const returnedFromService = Object.assign(
                    {
                        doB: currentDate.format(DATE_TIME_FORMAT)
                    },
                    elemDefault
                );
                service
                    .find(123)
                    .pipe(take(1))
                    .subscribe(resp => expect(resp).toMatchObject({ body: elemDefault }));

                const req = httpMock.expectOne({ method: 'GET' });
                req.flush(JSON.stringify(returnedFromService));
            });

            it('should create a Teacher', async () => {
                const returnedFromService = Object.assign(
                    {
                        id: 0,
                        doB: currentDate.format(DATE_TIME_FORMAT)
                    },
                    elemDefault
                );
                const expected = Object.assign(
                    {
                        doB: currentDate
                    },
                    returnedFromService
                );
                service
                    .create(new Teacher(null))
                    .pipe(take(1))
                    .subscribe(resp => expect(resp).toMatchObject({ body: expected }));
                const req = httpMock.expectOne({ method: 'POST' });
                req.flush(JSON.stringify(returnedFromService));
            });

            it('should update a Teacher', async () => {
                const returnedFromService = Object.assign(
                    {
                        identityNumber: 'BBBBBB',
                        fullName: 'BBBBBB',
                        phone: 'BBBBBB',
                        doB: currentDate.format(DATE_TIME_FORMAT),
                        address: 'BBBBBB',
                        email: 'BBBBBB',
                        password: 'BBBBBB',
                        dataStorage: 1,
                        usedStorage: 1,
                        level: 'BBBBBB',
                        status: 'BBBBBB',
                        avatar: 'BBBBBB'
                    },
                    elemDefault
                );

                const expected = Object.assign(
                    {
                        doB: currentDate
                    },
                    returnedFromService
                );
                service
                    .update(expected)
                    .pipe(take(1))
                    .subscribe(resp => expect(resp).toMatchObject({ body: expected }));
                const req = httpMock.expectOne({ method: 'PUT' });
                req.flush(JSON.stringify(returnedFromService));
            });

            it('should return a list of Teacher', async () => {
                const returnedFromService = Object.assign(
                    {
                        identityNumber: 'BBBBBB',
                        fullName: 'BBBBBB',
                        phone: 'BBBBBB',
                        doB: currentDate.format(DATE_TIME_FORMAT),
                        address: 'BBBBBB',
                        email: 'BBBBBB',
                        password: 'BBBBBB',
                        dataStorage: 1,
                        usedStorage: 1,
                        level: 'BBBBBB',
                        status: 'BBBBBB',
                        avatar: 'BBBBBB'
                    },
                    elemDefault
                );
                const expected = Object.assign(
                    {
                        doB: currentDate
                    },
                    returnedFromService
                );
                service
                    .query(expected)
                    .pipe(
                        take(1),
                        map(resp => resp.body)
                    )
                    .subscribe(body => expect(body).toContainEqual(expected));
                const req = httpMock.expectOne({ method: 'GET' });
                req.flush(JSON.stringify([returnedFromService]));
                httpMock.verify();
            });

            it('should delete a Teacher', async () => {
                const rxPromise = service.delete(123).subscribe(resp => expect(resp.ok));

                const req = httpMock.expectOne({ method: 'DELETE' });
                req.flush({ status: 200 });
            });
        });

        afterEach(() => {
            httpMock.verify();
        });
    });
});
