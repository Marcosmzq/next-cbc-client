import { Box, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import { GraphQLError } from "graphql";

interface DisplayErrorsProps {
  errors: boolean;
}

export const DisplayErrors: React.FC<DisplayErrorsProps> = ({ errors }) => {
  return (
    <Box my="10px" border="1px" borderColor="gray.200" p={4}>
      <Text as="em" color="primary" fontSize="md">
        ¡Ups! algo ha fallado, han ocurrido algunos errores
      </Text>
      <UnorderedList>
        {errors &&
          Object.values(errors).map((value) => (
            <ListItem key={value}>{value}</ListItem>
          ))}
      </UnorderedList>
    </Box>
  );
};
