import {Component, Inject} from '@angular/core';
import {Control, Validators, FormBuilder} from '@angular/common';
import {MediaItemService} from './media-item.service';
import {LOOKUP_LISTS} from './providers';

@Component({
    moduleId: module.id,
    selector: 'media-item-form',
    templateUrl: 'media-item-form.component.html',
    styleUrls: ['media-item-form.component.css']
})
export class MediaItemFormComponent {
    myForm;

    constructor(private formBuilder: FormBuilder,
                private mediaItemService: MediaItemService,
                @Inject(LOOKUP_LISTS) public lookupLists) {
    }

    ngOnInit() {
        this.myForm = this.formBuilder.group({
            'medium': new Control('Movies'),
            'name': new Control('', Validators.compose([
                Validators.required,
                Validators.pattern('[\\w\\-\\s\\/]+')
            ])),
            'category': new Control(''),
            'year': new Control('', this.yearValidator)
        });
    }

    yearValidator(control) {
        if (control.value.trim().length === 0) return null;
        var year = parseInt(control.value);
        var minYear = 1900;
        var maxYear = 2100;
        if (year >= minYear && year <= maxYear) return null;
        return {'year': {'min':minYear, 'max':maxYear}};
        //Originally: {'year': true};
    }

    onSubmit(mediaItem) {
        this.mediaItemService.add(mediaItem);
        console.log(this.myForm.controls);
        for (var key in this.myForm.controls) {
            console.log(key);
            this.myForm.controls[key].updateValue('');
            this.myForm.controls[key].setErrors(null);
        }
        // this.myForm.controls.map((name, control) => {
        //     control.updateValue('');
        //     control.setErrors(null);
        // });
        //this.myForm.controls['name'].updateValue('');
    }
}
