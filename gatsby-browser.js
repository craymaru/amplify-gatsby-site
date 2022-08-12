import "@stripe/stripe-js"
import Amplify, { Auth } from "aws-amplify"
import awsconfig from "./src/aws-exports"

Amplify.configure(awsconfig)
Auth.configure(awsconfig)

/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it
