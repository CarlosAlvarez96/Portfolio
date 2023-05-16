import { Button, Box, VStack } from "@chakra-ui/react"

function Navbar() {
    return (
        <Box
         w="200px"
         position="fixed"
         height="100vh"
         top="0"
         left="0"
         display="flex"
         justifyContent="center"
         alignItems="center"
         borderRight= "1px"
         borderColor="#08FDD8"
          >
            <VStack spacing={5} align="center">
                <Button 
                m="10px" 
                bg="#08FDD8"
                width="150px"
                >
                    Inicio
                </Button>
                <Button 
                m="10px"
                bg="#08FDD8"
                width="150px"
                >
                    Conocimientos
                </Button>
                <Button 
                m="10px"
                bg="#08FDD8"
                width="150px"
                >
                    Experiencia
                </Button>
                <Button 
                m="10px"
                bg="#08FDD8"
                width="150px"
                >
                    Proyectos
                </Button>
                <Button 
                m="10px"
                bg="#08FDD8"
                width="150px"
                >
                    Sobre mí
                </Button>
                <button className="linkedin">
                    <a href="https://www.linkedin.com/in/carlos-%C3%A1lvarez-mart%C3%ADn-669b00198/"></a>
                </button>
            </VStack>
            
        </Box>

    )
}

export default Navbar