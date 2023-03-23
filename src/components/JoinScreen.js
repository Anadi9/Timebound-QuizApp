import React from "react";
import { Box, Flex, Title, Button, Text, Group, ThemeIcon, Space, Stack } from "@mantine/core";
import { IconClock, IconPercentage, IconQuestionMark, IconRelationOneToOne } from "@tabler/icons-react";
export default function JoinScreen({ start }) {
  return (
    <Box className="join-screen" p={"1rem"}>
      <Flex direction={{ base: "column", sm: "row", md: "column" }} gap={{ base: "sm", sm: "lg" }} justify={{ sm: "center" }}>
        <Title color={"#7F17A3"}>
          The <span style={{ color: "#0E9A6B" }}>Daily</span> MS <span style={{ color: "#0E9A6B" }}>Excel</span> Quiz
        </Title>
        <Text>This Microsoft Excel Proficiency Text is designed to evaluate an individual's knowledge and skills in using Microsoft Excel.</Text>
      </Flex>
      <Space h="lg" />
      <Stack gap={"1rem"}>
        <Title>This Quiz Includes</Title>
        <Group>
          <ThemeIcon variant={"light"} color={"gray"}>
            <IconPercentage />
          </ThemeIcon>
          <Text>50% Passing Percentage</Text>
        </Group>
        <Group>
          <ThemeIcon variant={"light"} color={"gray"}>
            <IconQuestionMark />
          </ThemeIcon>
          <Text>5 Questions</Text>
        </Group>
        <Group>
          <ThemeIcon variant={"light"} color={"gray"}>
            <IconClock />
          </ThemeIcon>
          <Text>10 Mins</Text>
        </Group>
        <Group>
          <ThemeIcon variant={"light"} color={"gray"}>
            <IconRelationOneToOne />
          </ThemeIcon>
          <Text>1 Attempt Daily</Text>
        </Group>
      </Stack>
      <Space h="lg" />
      <Flex justify={"center"} align={"end"}>
        <Button w={"50%"} sx={{ backgroundColor: "#7F17A3", borderRadius: 20 }} onClick={start}>
          Take Quiz
        </Button>
      </Flex>
    </Box>
  );
}
