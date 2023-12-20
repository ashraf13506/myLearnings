import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl } from '@angular/forms';


@Component({
  selector: 'app-formgrouparray',
  templateUrl: './formgrouparray.component.html',
  styleUrls: ['./formgrouparray.component.scss']
})
export class FormgrouparrayComponent {

  constructor(private formBuilder:FormBuilder){}
  patient_form=this.formBuilder.group({
    patientName:new FormControl(''),
    patientGender:new FormControl(),
    patientAge:new FormControl(),
    patientIdentityProofList:new FormControl(''),
    patientIdentityProofValue:new FormControl(''),
    patientVitals:this.formBuilder.group({
      patient_Weight:new FormControl(''),
      patient_height:new FormControl(''),
      patient_spO2:new FormControl('')

    }),
    aliases:this.formBuilder.array([this.formBuilder.control('')]),

  })

get aliases()
{
  return this.patient_form.get('aliases') as FormArray
}

addAlias()
{
  this.aliases.push(this.formBuilder.control(''))
}

}
