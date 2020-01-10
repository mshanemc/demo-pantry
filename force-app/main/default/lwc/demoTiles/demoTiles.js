import { LightningElement, wire, track } from 'lwc';
import { getListUi } from 'lightning/uiListApi';
import DEMOOBJ from '@salesforce/schema/Demo__c';

export default class DemoTiles extends LightningElement {
  @track demos;

  @wire(getListUi, {
    objectApiName: DEMOOBJ,
    listViewApiName: 'Published'
  })
  wiredDemos({ data, error }) {
    if (data) {
      this.demos = data.records.records;
    } else {
      // eslint-disable-next-line no-console
      console.error(error);
    }
  }
}
