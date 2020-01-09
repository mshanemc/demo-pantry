import { LightningElement, wire } from "lwc";
import { getListUi } from "lightning/uiListApi";
import DEMOOBJ from "@salesforce/schema/Demo__c";

export default class DemoTiles extends LightningElement {
  @wire(getListUi, {
    objectApiName: DEMOOBJ,
    listViewApiName: "Published"
  })
  demos;
}
