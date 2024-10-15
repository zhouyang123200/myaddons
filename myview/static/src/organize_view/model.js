/** @odoo-module **/
import { KeepLast } from "@web/core/utils/concurrency";

export class OrganizeModel {

    constructor(orm, resModel, fields, archInfo) {
        this.orm = orm;
        this.resModel = resModel;
        this.fields = fields;
        this.keepLast = new KeepLast();
        const { nameField, hieriarchyField } = archInfo;
        this.obj_fields = [nameField, hieriarchyField]
    }

    async load(domain) {
        const { length, records } = await this.keepLast.add(
            this.orm.webSearchRead(this.resModel, domain, this.obj_fields, {})
        );
        this.recordsLength = length;
        this.records = records;
    }
}