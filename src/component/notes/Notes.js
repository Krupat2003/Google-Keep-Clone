import React from 'react';

import { useContext } from 'react';

import { Box, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

// component 
import Form from './Form';
import Note from './Note';
// import { DataContext } from '../context/DataProvider';
import { DataContext } from '../../context/DataProvider';
import EmptyNotes from './EmptyNotes';

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const DrawerHeader = styled('div')(({ theme }) => ({
    ...theme.mixins.toolbar,
}));

const Notes = () => {

    const { notes } = useContext(DataContext);

    const onDragEnd = () => {

    }

    return (
        <>
            <Box sx={{ display: 'flex', width: '100%' }}>
                <Box sx={{ p: 3, width: '100%;' }}>
                    <DrawerHeader />
                    <Form />
                    {/* {
                        notes.length > 0 ?

                            <DragDropContext onDragEnd={onDragEnd}>
                                <Droppable droppableId="droppable">
                                    {(provided, snapshot) => (
                                        <Grid container style={{ marginTop: 16 }}
                                            {...provided.droppableProps}
                                            ref={provided.innerRef}
                                        >
                                            {
                                                notes.map(note, index => (
                                                    <Draggable key={note.id} draggableId={note.id} index={index}>
                                                        {(provided, snapshot) => (
                                                            <Grid item
                                                                ref={provided.innerRef}
                                                                {...provided.draggableProps}
                                                                {...provided.dragHandleProps}
                                                            >
                                                                <Note note={note} />
                                                            </Grid>
                                                        )}
                                                    </Draggable>
                                                ))
                                            }
                                        </Grid>
                                    )}
                                </Droppable>
                            </DragDropContext>
                            : <EmptyNotes />
                    } */}


{ notes.length > 0 ? 
                    <DragDropContext onDragEnd={onDragEnd}>
                        <Droppable droppableId="droppable">
                            {(provided, snapshot) => (
                                <Grid container style={{ marginTop: 16}}
                                    {...provided.droppableProps}
                                    ref={provided.innerRef}
                                >
                                {
                                    notes.map((note, index) => (
                                        <Draggable key={note.id} draggableId={note.id} index={index}>
                                            {(provided, snapshot) => (
                                                <Grid ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                    item
                                                >
                                                    <Note note={note} />
                                                </Grid>
                                            )}
                                        </Draggable >
                                    ))
                                }
                                </Grid>
                            )}
                        </Droppable >
                    </DragDropContext>
                : <EmptyNotes /> }
                </Box>
            </Box>
        </>
    )
}

export default Notes;
