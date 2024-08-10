import { Box, useMediaQuery } from "@mui/material"
import Row1 from "./Row1"
import Row2 from "./Row2"
import Row3 from "./Row3"
import { gridTemplateLargeScreen, gridTemplateSmallScreen } from "@/constants/gridTemplates"
const Dashboard = () => {
    const isAboveMediumScreen = useMediaQuery("(min-width: 1200px)")
    return (
        <Box
            width="100%"
            height="100%"
            display="grid"
            gap="1.5rem"
            sx={
                isAboveMediumScreen ?
                    {
                        gridTemplateColumns: "repeat(3, minmax(370px, 1fr))",
                        gridTemplateRows: "repeat(10, minmax(60px, 1fr))",
                        gridTemplateAreas: gridTemplateLargeScreen,
                    } : {
                        gridTemplateAreas: gridTemplateSmallScreen,
                        gridAutoColumns: "1fr",
                        gridAutoRows: "80px"
                    }}
        >
            <Row1 />
            <Row2 />
            <Row3 />
        </Box>
    )
}

export default Dashboard