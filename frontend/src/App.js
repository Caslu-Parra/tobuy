import { Button, Theme, Tabs, Box, Text, Flex, Table, Card, DataList, Link, Badge, IconButton, Code, Heading } from "@radix-ui/themes";
import { CopyIcon } from '@radix-ui/react-icons';

export default function () {
    return (
        <Theme className="container mt-4" accentColor="orange" grayColor="sand" radius="large" scaling="105%">
            <Tabs.Root defaultValue="tobuy">
                <Tabs.List justify="center">
                    <Tabs.Trigger value="tobuy">
                        <Heading size="4">Itens a Comprar</Heading>
                    </Tabs.Trigger>
                    <Tabs.Trigger value="buyed">
                        <Heading size="3">Histórico de Compras</Heading>
                    </Tabs.Trigger>
                    <Tabs.Trigger value="detail" disabled>
                        <Heading size="3">Histórico Detalhado</Heading>
                    </Tabs.Trigger>
                </Tabs.List>

                <Box pt="3">
                    <Tabs.Content value="tobuy">
                        <Flex gap="5" justify="between">
                            <Button variant="solid" color="grass" > Novo Produto </Button>
                        </Flex>
                    </Tabs.Content>

                    <Tabs.Content value="buyed">
                        <Flex direction="column" gap="5" maxWidth="100%">

                            <Text size="3" weight="bold">Usuario ...</Text>

                            <Table.Root size="2" variant="surface">
                                <Table.Header>
                                    <Table.Row>
                                        <Table.ColumnHeaderCell>Detalhes</Table.ColumnHeaderCell>
                                        <Table.ColumnHeaderCell>Data da Compra</Table.ColumnHeaderCell>
                                    </Table.Row>
                                </Table.Header>

                                <Table.Body>
                                    <Table.Row>
                                        <Table.RowHeaderCell>
                                            <Box>
                                                <Card asChild>
                                                    <div>
                                                        <Text as="div" size="2" weight="bold">
                                                            Leite
                                                        </Text>
                                                        <Text as="div" color="gray" size="2">
                                                            Quantidade: 1
                                                        </Text>
                                                        <Text as="div" color="gray" size="2">
                                                            Ultima compra: 2024-12-11
                                                        </Text>
                                                        <Text as="div" color="gray" size="2">
                                                            Start building your next project in minutes
                                                        </Text>
                                                    </div>
                                                </Card>
                                            </Box>
                                        </Table.RowHeaderCell>
                                        <Table.Cell>2024-12-11</Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.RowHeaderCell>Zahra Ambessa</Table.RowHeaderCell>
                                        <Table.Cell>zahra@example.com</Table.Cell>
                                    </Table.Row>
                                </Table.Body>
                            </Table.Root>

                            <Table.Root size="2">
                                <Table.Header>
                                    <Table.Row>
                                        <Table.ColumnHeaderCell>Full name</Table.ColumnHeaderCell>
                                        <Table.ColumnHeaderCell>Email</Table.ColumnHeaderCell>
                                        <Table.ColumnHeaderCell>celular</Table.ColumnHeaderCell>
                                        <Table.ColumnHeaderCell>celular</Table.ColumnHeaderCell>
                                        <Table.ColumnHeaderCell>celular</Table.ColumnHeaderCell>
                                        <Table.ColumnHeaderCell>celular</Table.ColumnHeaderCell>
                                    </Table.Row>
                                </Table.Header>

                                <Table.Body>
                                    <Table.Row>
                                        <Table.RowHeaderCell>Danilo Sousa</Table.RowHeaderCell>
                                        <Table.Cell>danilo@example.com</Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.RowHeaderCell>Zahra Ambessa</Table.RowHeaderCell>
                                        <Table.Cell>zahra@example.com</Table.Cell>
                                    </Table.Row>
                                </Table.Body>
                            </Table.Root>
                        </Flex>

                    </Tabs.Content>

                    <Tabs.Content value="detail">
                        <Flex direction="column" gap="5" maxWidth="100%">

                            <Box>
                                <Card asChild>
                                    <DataList.Root>
                                        <DataList.Item align="center">
                                            <DataList.Label minWidth="88px">Status</DataList.Label>
                                            <DataList.Value>
                                                <Badge color="jade" variant="soft" radius="full">
                                                    Authorized
                                                </Badge>
                                            </DataList.Value>
                                        </DataList.Item>
                                        <DataList.Item>
                                            <DataList.Label minWidth="88px">ID</DataList.Label>
                                            <DataList.Value>
                                                <Flex align="center" gap="2">
                                                    <Code variant="ghost">u_2J89JSA4GJ</Code>
                                                    <IconButton
                                                        size="1"
                                                        aria-label="Copy value"
                                                        color="gray"
                                                        variant="ghost"
                                                    >
                                                        <CopyIcon />
                                                    </IconButton>
                                                </Flex>
                                            </DataList.Value>
                                        </DataList.Item>
                                        <DataList.Item>
                                            <DataList.Label minWidth="88px">Name</DataList.Label>
                                            <DataList.Value>Vlad Moroz</DataList.Value>
                                        </DataList.Item>
                                        <DataList.Item>
                                            <DataList.Label minWidth="88px">Email</DataList.Label>
                                            <DataList.Value>
                                                <Link href="mailto:vlad@workos.com">vlad@workos.com</Link>
                                            </DataList.Value>
                                        </DataList.Item>
                                        <DataList.Item>
                                            <DataList.Label minWidth="88px">Company</DataList.Label>
                                            <DataList.Value>
                                                <Link target="_blank" href="https://workos.com">
                                                    WorkOS
                                                </Link>
                                            </DataList.Value>
                                        </DataList.Item>
                                    </DataList.Root>
                                </Card>
                            </Box>




                            <Table.Root size="2" variant="surface">
                                <Table.Header>
                                    <Table.Row>
                                        <Table.ColumnHeaderCell>Detalhes</Table.ColumnHeaderCell>
                                        <Table.ColumnHeaderCell>Data da Compra</Table.ColumnHeaderCell>
                                    </Table.Row>
                                </Table.Header>

                                <Table.Body>
                                    <Table.Row>
                                        <Table.RowHeaderCell>
                                            <Box>
                                                <Card asChild>
                                                    <div>
                                                        <Text as="div" size="2" weight="bold">
                                                            Leite
                                                        </Text>
                                                        <Text as="div" color="gray" size="2">
                                                            Quantidade: 1
                                                        </Text>
                                                        <Text as="div" color="gray" size="2">
                                                            Ultima compra: 2024-12-11
                                                        </Text>
                                                        <Text as="div" color="gray" size="2">
                                                            Start building your next project in minutes
                                                        </Text>
                                                    </div>
                                                </Card>
                                            </Box>
                                        </Table.RowHeaderCell>
                                        <Table.Cell>2024-12-11</Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.RowHeaderCell>Zahra Ambessa</Table.RowHeaderCell>
                                        <Table.Cell>zahra@example.com</Table.Cell>
                                    </Table.Row>
                                </Table.Body>
                            </Table.Root>

                            <Table.Root size="2">
                                <Table.Header>
                                    <Table.Row>
                                        <Table.ColumnHeaderCell>Full name</Table.ColumnHeaderCell>
                                        <Table.ColumnHeaderCell>Email</Table.ColumnHeaderCell>
                                        <Table.ColumnHeaderCell>celular</Table.ColumnHeaderCell>
                                        <Table.ColumnHeaderCell>celular</Table.ColumnHeaderCell>
                                        <Table.ColumnHeaderCell>celular</Table.ColumnHeaderCell>
                                        <Table.ColumnHeaderCell>celular</Table.ColumnHeaderCell>
                                    </Table.Row>
                                </Table.Header>

                                <Table.Body>
                                    <Table.Row>
                                        <Table.RowHeaderCell>Danilo Sousa</Table.RowHeaderCell>
                                        <Table.Cell>danilo@example.com</Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.RowHeaderCell>Zahra Ambessa</Table.RowHeaderCell>
                                        <Table.Cell>zahra@example.com</Table.Cell>
                                    </Table.Row>
                                </Table.Body>
                            </Table.Root>
                        </Flex>

                    </Tabs.Content>

                </Box>
            </Tabs.Root>

        </Theme>
    );
}
