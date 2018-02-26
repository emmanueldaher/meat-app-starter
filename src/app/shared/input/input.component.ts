import {
    Component,
    OnInit,
    Input,
    ContentChild,
    AfterContentInit
} from '@angular/core'
import { NgModel } from '@angular/forms'

@Component({
    selector: 'mt-input-container',
    templateUrl: './input.component.html'
})
export class InputComponent implements OnInit, AfterContentInit {
    @Input() label: string
    @Input() errorMessage: string

    input: any

    @ContentChild(NgModel) model: NgModel

    constructor() {}

    ngOnInit() {}

    ngAfterContentInit() {
        this.input = this.model

        if (!this.input) {
            throw new Error(
                'Esse componente precisa ser usado com uma diretiva ngModel'
            )
        }
    }

    hasSuccess() {
        return this.input.valid && (this.input.touched || this.input.dirty)
    }

    hasError() {
        return this.input.invalid && (this.input.touched || this.input.dirty)
    }
}
