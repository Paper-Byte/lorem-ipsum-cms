import {
  Button,
  VisuallyHidden,
  useColorModeValue,
  Link,
} from '@chakra-ui/react';

const SocialButton = ({ children, label, href }) => {
  return (
    <Link href={href} isExternal>
      <Button
        bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
        rounded={'md'}
        w={10}
        h={10}
        cursor={'pointer'}
        display={'inline-flex'}
        alignItems={'center'}
        justifyContent={'center'}
        transition={'background 0.3s ease'}
        _hover={{
          bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
        }}
      >
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </Button>
    </Link>
  );
};

export default SocialButton;
