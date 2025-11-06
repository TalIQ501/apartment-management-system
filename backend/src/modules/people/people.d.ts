export interface PersonInput {
  first_name: string;
  last_name?: string;
  email?: string;
  contact_1?: string;
  contact_2?: string;
  date_of_birth: Date;
  identity_no: string;
  father_id?: string;
  mother_id?: string;
  guardian_id?: string;
}
