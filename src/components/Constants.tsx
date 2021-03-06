// change imported models for different domains
import detailedModel from "../models/min-detailed-model.json";
import simpleModel from "../models/min-simple-model.json";

import { BrowserCompatibility } from "./Data";

// GENERAL OPTIONS
export const SHOW_DETAILED_VIEW = true;
export const DETAILED_MODEL = detailedModel;
export const SIMPLE_MODEL = simpleModel;


export const BROWSER_COMPABILITY: BrowserCompatibility = {
  EDGE: 1,
  FIREFOX: 1,
  CHROME: 1,
  OPERA: 1,
  SAFARI: 1
};
// DIMENSIONS
export const TITLE_HEIGHT = 2.6;
export const SUBTITLE_HEIGHT = 7;
export const SUBTITLE_MARGIN_BOTTOM = 1;
export const TITLE_MARGIN_BOTTOM = 0.5;
export const TITLE_OFFSET = TITLE_HEIGHT + TITLE_MARGIN_BOTTOM;
export const SUBTITLE_OFFSET = SUBTITLE_HEIGHT + SUBTITLE_MARGIN_BOTTOM;
export const TITLE_LABEL_SIZE = 1.4;
export const SUBTITLE_LABEL_SIZE = 1;
export const CONTROLS_HEIGHT = 3;

export const HEADER_LABEL_SIZE = 1.2; //vw
export const HEADER_HEIGHT = 7.5; //vw
export const HEADER_MARGIN_TOP = 1; //vw
export const HEADER_MARGIN_BOTTOM = 2; //vw
export const HEADER_OFFSET = HEADER_MARGIN_TOP + HEADER_HEIGHT + HEADER_MARGIN_BOTTOM;

export const HEADER_WIDTH = 20; // vw

export const PARTICIPANTS_LABEL_SIZE = 0.9;
export const PARTICIPANTS_MARGIN = 3;
export const PARTICIPANTS_SIZE = 50;

export const CASE_HEADER_LABEL_SIZE = 1.2; //vw
export const CASE_HEADER_HEIGHT = 1.7; //vw

export const CASE_MARGIN_BOTTOM = 0.5;//vw
export const CASE_PADDING_TOP = 1;//vw

export const CASE_PADDING_BOTTOM = 1;//vw

export const ACTION_LABEL_SIZE = 0.9;//vw
export const ACTION_ROW_SIZE = 1; //vw
export const ACTION_MARGIN_TOP = ACTION_ROW_SIZE;
export const ACTION_MARGIN_BOTTOM = ACTION_ROW_SIZE;
export const ACTION_MARGIN_LEFT = 1; //vw
export const ACTION_PADDING_LEFT = 1;
export const ACTION_MARGIN_RIGHT = 1;
export const ACTION_PADDING_RIGHT = 1;

export const SHORTINFO_LABEL_SIZE = 0.7;
export const SHORTINFO_ICON_SIZE = 8;
export const SHORTINFO_ROW_SIZE = 1;
export const SHORTINFO_MARGIN_BOTTOM = 0; //vw
export const POLICY_LABEL_SIZE = 0.8; //vw

export const ACTION_PADDING_TOP = ACTION_ROW_SIZE;
export const ACTION_PADDING_BOTTOM = ACTION_ROW_SIZE;

export const CONNECTION_LABEL_SIZE = 1;
export const CONNECTION_ROW_SIZE = 1;
export const CONNECTION_ARROW_SIZE = 2;//vw
export const CONNECTION_STROKE_SIZE = 2;//vw


export const DATASOURCE_AND_DATAPURPOSE_WIDTH = 20; //%
export const DATASOURCE_AND_DATAPURPOSE_LEFT_OR_RIGHT = 2; //%
export const DATASOURCE_AND_DATAPURPOSE_LABEL_SIZE = 1.0;
export const DATASOURCE_AND_DATAPURPOSE_ROW_SIZE = 1.1;
export const DATASOURCE_AND_DATAPURPOSE_MARGIN_TOP = 0.2;//DATASOURCE_AND_DATAPURPOSE_ROW_SIZE;
export const DATASOURCE_AND_DATAPURPOSE_MARGIN_BOTTOM = 0.2;//DATASOURCE_AND_DATAPURPOSE_ROW_SIZE;
export const DATASOURCE_AND_DATAPURPOSE_PADDING_TOP = 0.2;//DATASOURCE_AND_DATAPURPOSE_ROW_SIZE;
export const DATASOURCE_AND_DATAPURPOSE_PADDING_BOTTOM = 0.2;//DATASOURCE_AND_DATAPURPOSE_ROW_SIZE;
export const DATASOURCE_AND_DATAPURPOSE_PADDING_LEFT = 1;//vw
export const DATASOURCE_AND_DATAPURPOSE_PADDING_RIGHT = DATASOURCE_AND_DATAPURPOSE_PADDING_LEFT;

export const LEGEND_LABEL_SIZE = 1.2;
export const LEGEND_LABEL_ITEM_SIZE = 0.8;
export const LEGEND_LABEL_ICON_SIZE = 3;

export const MIN_GAP_HEIGHT = 4;//VW


