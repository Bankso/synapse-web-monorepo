// https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/auth/LoginResponse.html
export type LoginResponse = {
  sessionToken: string // A token that identifies the user
  acceptsTermsOfUse: boolean // BOOLEAN	Does the user accept the terms of use?
  authenticationReceipt: string // STRING	A valid receipt allows the user to skip extra security checks.
}
