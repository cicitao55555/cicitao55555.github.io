import axios from 'axios'

const request = (config) => {
    const { url, params, dataType, showLoading } = config
    dataType = dataType ? 'form' : dataType
    showLoading = showLoading ? 'true' : showLoading
}

export default request