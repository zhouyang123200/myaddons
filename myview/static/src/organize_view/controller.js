/** @odoo-module */

import { Layout } from "@web/search/layout";
import { standardViewProps } from "@web/views/standard_view_props";
import { useService } from "@web/core/utils/hooks";

const { Component, onWillStart, onWillUpdateProps, useState } = owl;


export class OrganizeController extends Component {
    static props = {
        ...standardViewProps,
        archInfo: Object,
        Model: Function,
        Renderer: Function,
    };

    setup() {
        this.orm = useService("orm");

        this.model = useState(
            new this.props.Model(
                this.orm,
                this.props.resModel,
                this.props.fields,
                this.props.archInfo
            )
        );

        onWillStart(async () => {
            await this.model.load(this.props.domain);
        });
    }
}


OrganizeController.template = "myview.organize_controller_view";
OrganizeController.components = { Layout };