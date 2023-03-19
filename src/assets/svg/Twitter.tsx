interface tweet {
  width: string;
  height: string;
}

const Twitter = ({ width, height }: tweet) => (
  <svg
    version="1.2"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 13 10"
    width={width}
    height={height}
  >
    <defs>
      <image
        width="13"
        height="10"
        id="img2"
        href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAKCAMAAABYMCT2AAAAAXNSR0IB2cksfwAAAIdQTFRF2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUggdwpkAAAAC10Uk5TAAIVnjgXlS7K/80nA8uXJO5mz8aBJRr+hIePH7f8ThExUR6c6lRTodbjtG8OUOgZTAAAAGFJREFUeJwtiu0aQmAQRLe8YooKEer1HaL7vz67m/mxe84zQ3QgydEx+t2Tx9fH+SIWhLjSDcBdywiIEzY8UrbsiT25lMUu5Uu3bxXLZKq6+VvL1vVWefjojMZp/i7rT3ADFx4FhEky2DwAAAAASUVORK5CYII="
      />
    </defs>
    <style></style>
    <use href="#img2" x="0" y="0" />
  </svg>
);

export default Twitter;
