import { useParams } from 'react-router-dom'
import Container from '@/components/ui/Container'
import {
    categoryColorMap,
    getCategoryTitle,
    getStatusTitle,
} from '@/constants/requests.constants'
import { useGetRequestByIdQuery } from '@/services/api'

export default function RequestPage() {
    const { requestId } = useParams()

    const { data } = useGetRequestByIdQuery(requestId ?? '')
    if (!data) return
    const { user, category, ...requestData } = data
    const colors = categoryColorMap[category] || {
        bg: 'bg-gray-100',
        color: 'text-gray-600',
    }
    return (
        <div className="py-5 md:py-16">
            <Container className="grid grid-cols-1 xl:grid-cols-12 gap-5 items-center">
                <div>
                    <ul className="flex flex-col gap-y-6 p-3 text-xl">
                        <li>{user.name}</li>
                        <li>{user.phone}</li>
                        <li>{user.email}</li>
                    </ul>
                </div>
                <div className="text-xl ">
                    <div className="flex gap-5 justify-between p-5 border-2 border-b-0 border-gray-300 rounded-t-lg">
                        <div>Статус</div>
                        <div className="text-right">
                            {getStatusTitle(requestData.status)}
                        </div>
                    </div>
                    <div className="flex gap-5 justify-between p-5 border-2 border-b-0 border-gray-300">
                        <div>Заголовок</div>
                        <div className="text-right">{requestData.title}</div>
                    </div>
                    <div className="flex gap-5 justify-between p-5 border-2 border-b-0 border-gray-300">
                        <div>Детальний опис</div>
                        <div className="text-right">
                            {requestData.description}
                        </div>
                    </div>
                    <div className="flex gap-5 justify-between p-5 border-2 border-b-0 border-gray-300">
                        <div>Категорія</div>
                        <div
                            className={`text-right ${colors.bg} ${colors.color}`}
                        >
                            {getCategoryTitle(category)}
                        </div>
                    </div>
                    <div className="flex gap-5 justify-between p-5 border-2 border-gray-300 rounded-b-lg">
                        <div>Дата створення</div>
                        <div className="text-right">
                            {new Date(requestData.createdAt).toLocaleDateString(
                                'uk-UA'
                            )}
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}
