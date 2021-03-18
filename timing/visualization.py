import pygame
import pygame.freetype


from ble_usb_handler import CommunicationThread
from event_handler import EventHandler, PyGameVisualizer
from timing_logic import StateMachine


if __name__ == '__main__':
    pygame.display.set_caption('Curling Timer')
    programIcon = pygame.image.load('CurlingStoneIcon.png')
    pygame.display.set_icon(programIcon)

    screen = pygame.display.set_mode([1000, 600])
    pygame.init()

    communication_thread = CommunicationThread()
    pygame_handler = PyGameVisualizer(screen)
    event_handlers = (pygame_handler, )

    state_machine = StateMachine(event_handlers=event_handlers)

    running = True
    while running:    
        screen.fill((255, 255, 255))

        if not communication_thread.queue.empty():
            item = communication_thread.queue.get_nowait()
            state_machine.run(item)

        pygame_handler.render()

        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                running = False
                
        pygame.display.flip()

    pygame.quit()