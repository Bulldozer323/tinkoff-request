import toLower from '@tinkoff/utils/string/toLower';
import includes from '@tinkoff/utils/array/includes';

export default (res: Response) => {
    const type = toLower(res.headers.get('content-type') || '');

    if (includes('application/json', type)) {
        return res.json();
    }

    if (includes('application/octet-stream', type)) {
        return res.arrayBuffer();
    }

    return res.text();
};
