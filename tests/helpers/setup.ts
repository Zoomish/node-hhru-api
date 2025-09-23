import { setHttpConfig } from '../../src/http.ts'

export function setupTests() {
    setHttpConfig({
        locale: 'RU',
        host: 'hh.ru',
        userAgent: 'NodeHH-API/1.0 (zoomish39@gmail.com)',
    })
}
