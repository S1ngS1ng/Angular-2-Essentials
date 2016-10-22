import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MediaItemService } from '../media-item.service';
import { LOOKUP_LISTS } from '../providers';

@Component({
    selector: 'media-item-form',
    templateUrl: 'media-item-form.component.html',
    styleUrls: ['media-item-form.component.css']
})
export class MediaItemFormComponent implements OnInit {
    myForm: FormGroup;

    constructor(private _fb: FormBuilder,
                private mediaItemService: MediaItemService,
                @Inject(LOOKUP_LISTS) public lookupLists) {}

    ngOnInit() {
        this.myForm = this._fb.group({
            'medium': ['Movies', Validators.required],
            'name': ['', Validators.compose([
                Validators.required,
                Validators.pattern('[\\w\\-\\s\\/]+')
            ])],
            'category': '',
            'year': ['', this.yearValidator]
        })
    }

    yearValidator(control: FormControl): { [s: string]: boolean} {
        if (control.value.trim().length === 0) {
            // Wrap with yearNotDefined as it is called by "hasError"
            return { yearNotDefined: true }
        } else if (parseInt(control.value.trim()) > 2100 || parseInt(control.value.trim()) < 1900) {
            return { yearOutOfRange: true }
        }
    }


    onSubmit(mediaItem): void {
        this.mediaItemService.add(mediaItem);
        this.ngOnInit();
    }
}
