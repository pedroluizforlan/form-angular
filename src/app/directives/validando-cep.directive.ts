import {Directive} from '@angular/core';
import {AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors} from "@angular/forms";
import {map, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {ConsultaCepService} from "../service/consulta-cep.service";

@Directive({
    selector: '[validadorCep]',
    providers: [{
        provide: NG_ASYNC_VALIDATORS,
        useClass: ValidandoCepDirective,
        multi: true
    }]
})
export class ValidandoCepDirective implements AsyncValidator {

    constructor(private serviceConsultaCep: ConsultaCepService) {
    }

    validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
        const cep = control.value;
        return this.serviceConsultaCep
            .getConsultaCep(cep)
            .pipe(map(
                (resultado: any) => resultado.erro ? {'validadorCep': true} : null))

    }

}
