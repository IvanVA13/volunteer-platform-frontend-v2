import { useParams } from 'react-router-dom'

export default function RequestPage() {
    const params = useParams()
    return <div>RequestPage {params.requestId}</div>
}
