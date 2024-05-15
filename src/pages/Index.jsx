import { Container, Text, VStack, Heading, Box, Input, Textarea, Button, useToast } from "@chakra-ui/react";
import { useState } from "react";

const Index = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const toast = useToast();

  const handleSaveNote = () => {
    if (title.trim() === "" || content.trim() === "") {
      toast({
        title: "Error",
        description: "Title and content cannot be empty.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    // Here you would normally save the note to a database or state management system
    console.log("Note saved:", { title, content });

    toast({
      title: "Note Saved",
      description: "Your note has been saved successfully.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });

    // Clear the input fields after saving
    setTitle("");
    setContent("");
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Heading as="h1" size="xl">Note Taking App</Heading>
        <Box width="100%">
          <Input
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            mb={4}
          />
          <Textarea
            placeholder="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            mb={4}
          />
          <Button colorScheme="blue" onClick={handleSaveNote} width="100%">Save Note</Button>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;