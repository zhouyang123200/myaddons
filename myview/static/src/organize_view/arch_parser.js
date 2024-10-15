/** @odoo-module */
import { XMLParser } from "@web/core/utils/xml";

export class OrganizeArchParser extends XMLParser {
    parse(arch, models, modelName) {
        const xmlDoc = this.parseXML(arch);
        const nameField = xmlDoc.getAttribute("name");
        const hieriarchyField = xmlDoc.getAttribute("hieriarchy");

        return {
            nameField,
            hieriarchyField
        }
    }
}




