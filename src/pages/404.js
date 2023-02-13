import * as React from "react"

import Seo from "../components/seo"

const NotFoundPage = () => (
  <div>
    <h2>404</h2>
    <p>Sorry, page doesn't exist</p>
  </div>
)

export const Head = () => <Seo title="404: Not Found" />

export default NotFoundPage
