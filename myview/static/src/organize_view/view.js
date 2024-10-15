/** @odoo-module */
import { registry } from "@web/core/registry";
import { OrganizeController } from "./controller"
import { OrganizeArchParser } from "./arch_parser.js"
import { OrganizeModel } from "./model"
import { OrganizeRenderer } from "./renderer"


export const organizeView = {
      type: "organize",
      display_name: "Organize View",
      icon: "fa fa-sitemap",
      multiRecord: true,
      Controller: OrganizeController,
      ArchParser: OrganizeArchParser,
      Model: OrganizeModel,
      Renderer: OrganizeRenderer,

      props(genericProps, view) {
            const { ArchParser } = view;
            const { arch } = genericProps;
            const archInfo = new ArchParser().parse(arch);

            return {
                  ...genericProps,
                  Model: view.Model,
                  Renderer: view.Renderer,
                  archInfo,
            };
      },
};


registry.category("views").add("organize", organizeView);
