import DashboardBox from '@/components/DashboardBox'
import { useGetKpisQuery } from '@/state/api'

type Props = {}

const Row1 = (props: Props) => {
    const { data } = useGetKpisQuery();
    return (
        <>
            <DashboardBox gridArea="c"></DashboardBox>
            <DashboardBox gridArea="b"></DashboardBox>
            <DashboardBox gridArea="d"></DashboardBox>
        </>
    )
}

export default Row1