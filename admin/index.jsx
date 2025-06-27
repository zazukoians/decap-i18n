import CMS from 'decap-cms-app';
import React from "react";
import DatasetSearchComponent from "./DatasetSearchComponent";
import DatasetPreviewComponent from "./DatasetPreviewComponent";

CMS.init()

CMS.registerWidget('dataset', DatasetSearchComponent, DatasetPreviewComponent, {
    properties: {
        piveau: {
            type: 'object',
            properties: {
                ui: {
                    type: 'string',
                },
                search: {
                    type: 'string',
                },
            }
        }
    }
});
