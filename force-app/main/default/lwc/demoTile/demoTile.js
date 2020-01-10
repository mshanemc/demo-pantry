import { LightningElement, api, track, wire } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

import { getRecord } from 'lightning/uiRecordApi';
const fields = [
  'Demo__c.Description__c',
  'Demo__c.Name',
  'Demo__c.Guide__c',
  'Demo__c.Scratch_Org_Deploy__c',
  'Demo__c.Existing_Org_Deploy__c'
];
export default class DemoTile extends NavigationMixin(LightningElement) {
  @api recordId;
  @track record;

  @wire(getRecord, {
    recordId: '$recordId',
    layoutTypes: 'Full',
    fields: fields
  })
  wiredRecord({ data, error }) {
    if (data) {
      //   console.log(data);
      this.record = data;
    } else {
      // eslint-disable-next-line no-console
      console.error(error);
    }
  }

  details() {
    this[NavigationMixin.Navigate]({
      type: 'standard__recordPage',
      attributes: {
        recordId: this.recordId,
        objectApiName: 'Demo__c',
        actionName: 'view'
      }
    });
  }

  webNav(url) {
    this[NavigationMixin.Navigate]({
      type: 'standard__webPage',
      attributes: {
        url
      }
    });
  }
  guide() {
    this.webNav(this.record.fields.Guide__c.value);
  }

  newOrg() {
    this.webNav(this.record.fields.Scratch_Org_Deploy__c.value);
  }

  existing() {
    this.webNav(this.record.fields.Existing_Org_Deploy__c.value);
  }
}
