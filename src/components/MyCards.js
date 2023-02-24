import { Card, Center, CardBody, Container } from "@chakra-ui/react";
import { Link, Stack, Heading, Image } from "@chakra-ui/react";
// import { htmlToText } from "html-to-text";
import { Divider, Button, CardFooter } from "@chakra-ui/react";

function MyCards(props) {
  const MAX_LENGTH = 400; // maximum length of the excerpt
  const link = "https://unlockyoursound.com/" + props.slug;

  // Truncate the HTML content to the maximum length
  let excerpt = props.content.substr(0, MAX_LENGTH);

  // Find the last index of the closing HTML tag to avoid cutting off in the middle of a tag
  const lastTagIndex = excerpt.lastIndexOf(">");

  // If the last index of the closing tag exists, use it as the endpoint of the truncated excerpt
  if (lastTagIndex !== -1) {
    excerpt = excerpt.substr(0, lastTagIndex + 1);
  }

  const truncatedContent = `${excerpt}...`;

  // console.log(props.img);

  return (
    <Container mb={5}>
      <Center>
        <Card maxW="sm">
          <CardBody>
            <Image
              src={props.img}
              alt="Green double couch with wooden legs"
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading size="xl">{props.title}</Heading>
              <p dangerouslySetInnerHTML={{ __html: truncatedContent }}></p>
            </Stack>
          </CardBody>
          <Divider />
          <Center>
            <CardFooter>
              <Link href={link} isExternal>
                <Button variant="solid" colorScheme="blue">
                  Read on
                </Button>
              </Link>
            </CardFooter>
          </Center>
        </Card>
      </Center>
    </Container>
  );
}

export default MyCards;
