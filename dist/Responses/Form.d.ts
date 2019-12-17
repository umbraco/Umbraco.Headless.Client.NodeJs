export interface FormConditionRule {
    field: string;
    operator: FormConditionRuleOperatorType;
    value: string;
}
export declare enum FormConditionRuleOperatorType {
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
export declare enum FormConditionActionType {
    All = "ALL",
    Any = "ANY"
}
export declare enum FormConditionLogicType {
    Show = "SHOW",
    Hido = "HIDE"
}
export interface FormField {
    caption: string;
    alias: string;
    required: boolean;
    requiredErrorMessage?: string;
    settings: object;
    type: string;
    preValues?: [];
    tooltip?: string;
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
export declare enum FormFieldIndicationType {
    NoIndicator = "NO_INDICATOR",
    MarkMandatoryFields = "MARK_MANDATORY_FIELDS",
    MarkOptionalFields = "MARK_OPTIONAL_FIELDS"
}
