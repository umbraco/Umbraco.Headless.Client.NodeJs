export interface FormConditionRule {
  field: string;
  operator: FormConditionRuleOperatorType;
  value: string;
}

export enum FormConditionRuleOperatorType {
  Is = "IS",
  IsNot = "IS_NOT",
  GreaterThen = "GREATER_THEN",
  LessThen = "LESS_THEN",
  Contains = "CONTAINS",
  StartsWith = "STARTS_WITH",
  EndsWith = "ENDS_WITH"
}

export interface FormCondition {
  actionType: FormConditionActionType;
  logicType: FormConditionLogicType;
  rules: FormConditionRule[];
}

export enum FormConditionLogicType {
  All = "ALL",
  Any = "ANY"
}

export enum FormConditionActionType {
  Show = "SHOW",
  Hide = "HIDE"
}

export interface FormField {
  caption: string;
  alias: string;
  required: boolean;
  requiredErrorMessage?: string;
  settings: object;
  type: string;
  preValues?: [];
  helpText?: string;
  condition?: FormCondition;
}

export interface FormColumn {
  width: number;
  fields: FormField[];
  caption?: string;
}

export interface FormFieldset {
  columns: FormColumn[];
  caption?: string;
  condition?: FormCondition;
}

export interface FormPage {
  fieldsets: FormFieldset[];
  caption?: string;
}

export interface Form {
  _id: string;
  indicator?: string;
  name?: string;
  nextLabel?: string;
  previousLabel?: string;
  submitLabel?: string;
  disableDefaultStylesheet: boolean;
  fieldIndicationType: FormFieldIndicationType;
  hideFieldValidation: boolean;
  messageOnSubmit?: string;
  showValidationSummary: boolean;
  pages: FormPage[];
}

export enum FormFieldIndicationType {
  NoIndicator = "NO_INDICATOR",
  MarkMandatoryFields = "MARK_MANDATORY_FIELDS",
  MarkOptionalFields = "MARK_OPTIONAL_FIELDS"
}
