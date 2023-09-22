import React from 'react';
import { Card, CardBody, Text, Stack, Box } from '@chakra-ui/react';

const InventoryBody = ({ userCatalogue }) => {
  return (
    <Box
      h="800px"
      w="800px"
      boxShadow="md"
      margin="auto"
      rounded="md"
    >
      <Stack>
        {userCatalogue.map((item) => {
          return (
            <Card
              w="700px"
              h="100px"
              margin="10px"
              alignSelf="center"
              variant={'elevated'}
            >
              <CardBody>{item.item}</CardBody>
            </Card>
          );
        })}
        {/* <Card
          w="700px"
          h="100px"
          margin="10px"
          alignSelf="center"
          variant={'elevated'}
        >
          <CardBody>
            <Text>Do I align?</Text>
          </CardBody>
        </Card> */}
      </Stack>
    </Box>
  );
};

export default InventoryBody;
