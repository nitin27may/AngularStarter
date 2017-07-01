import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Injectable()
export class ValidationService {
    constructor(public translate: TranslateService) {

    }
    getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
        let errorMessage = "";
        const config: any =  {
            'required': 'VALIDATOR.REQUIRED',
            'invalidCreditCard': 'Is invalid credit card number',
            'invalidEmailAddress': 'VALIDATOR.EMAIL',
            'invalidPassword': 'VALIDATOR.INVALIDPW',
           // 'minlength': "VALIDATOR.MINLENGTH', {value: `${validatorValue.requiredLength}`}",
        };
        if(validatorName =="minlength"){
            this.translate.get('VALIDATOR.MINLENGTH',{value: `${validatorValue.requiredLength}`}).subscribe((res: string) => {
                errorMessage = res;
            });
        }else{
            this.translate.get(config[validatorName]).subscribe((res: string) => {
                errorMessage = res;
            });
        }
        
        return errorMessage;
    }

    static creditCardValidator(control: any) {
        // Visa, MasterCard, American Express, Diners Club, Discover, JCB
        if (control.value.match(/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/)) {
            return null;
        } else {
            return { 'invalidCreditCard': true };
        }
    }

    emailValidator(control: any) {
        // RFC 2822 compliant regex
        if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
            return null;
        } else {
            return { 'invalidEmailAddress': true };
        }
    }

    static passwordValidator(control: any) {
        // {6,100}           - Assert password is between 6 and 100 characters
        // (?=.*[0-9])       - Assert a string has at least one number
        if (control.value.match(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,100}$/)) {
            return null;
        } else {
            return { 'invalidPassword': true };
        }
    }
}
