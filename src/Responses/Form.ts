/**
 * @public
 */
export interface FormConditionRule {
  field: string;
  operator: FormConditionRuleOperatorType;
  value: string;
}

/**
 * @public
 */
export enum FormConditionRuleOperatorType {
  Is = "IS",
  IsNot = "IS_NOT",
  GreaterThen = "GREATER_THEN",
  LessThen = "LESS_THEN",
  Contains = "CONTAINS",
  StartsWith = "STARTS_WITH",
  EndsWith = "ENDS_WITH"
}

/**
 * @public
 */
export interface FormCondition {
  actionType: FormConditionActionType;
  logicType: FormConditionLogicType;
  rules: FormConditionRule[];
}

/**
 * @public
 */
export enum FormConditionLogicType {
  All = "ALL",
  Any = "ANY"
}

/**
 * @public
 */
export enum FormConditionActionType {
  Show = "SHOW",
  Hide = "HIDE"
}

/**
 * @public
 */
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

/**
 * @public
 */
export interface FormColumn {
  width: number;
  fields: FormField[];
  caption?: string;
}

/**
 * @public
 */
export interface FormFieldset {
  columns: FormColumn[];
  caption?: string;
  condition?: FormCondition;
}

/**
 * @public
 */
export interface FormPage {
  fieldsets: FormFieldset[];
  caption?: string;
}

/**
 * @public
 */
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

/**
 * @public
 */
export enum FormFieldIndicationType {
  NoIndicator = "NO_INDICATOR",
  MarkMandatoryFields = "MARK_MANDATORY_FIELDS",
  MarkOptionalFields = "MARK_OPTIONAL_FIELDS"
}
