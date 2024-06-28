# Demo for a Wagmi Disconnected Cookie Bug

## Description

This repository demostrates the following bug in the Wagmi library:

When calling `disconnect`, wagmi would normally store a session cookie like `wagmi.io.metamask.disconnected` so the page stays disconnected after a refresh (Since wallet like metamask doesn't provide way to do a real disconnect).

However, this cookie should be cleared/removed if the user connects again. This removal of the "disconnected" cookie currently only works when the the "connect" call is maded on the root `/` and first level pages (e.g. `/foo`) but **NOT** on pages that are deeper (e.g. `/bar/qux` or `/a/b/c`).

## Library Versions:

- `@wagmi/core`: "2.11.5"
- `wagmi`: "2.10.8"
