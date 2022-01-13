# bitburner_scripts

A collection of my bitburner scripts.

---

## scan_recursive

### Runnable:

- Prints a raw list of results to the terminal.

### Library:

- Args:

  - ns
  - target (str): The node to start branching out from.
    hosts (List[str]): The list of hosts, with the target as a item.

- Returns:
  - List[str]: All nodes in sequential order.

---

## port_crack

### Runnable:

- Cracks the port of the specified target.
- Args:
  - target (str): The target to be NUKEd.

### Library:

- Args:
  - ns
  - target (str): The target to be NUKEd.

---

## auto_highest_capital

### Runnable:

- Prints a string of the highest maximum capital node, that is hackable under the users level.

- Args:
  - offset (int): An number to add to the current player level, for monetary comparison with higher level nodes.

### Library:

- Args:
  - ns
  - scan_results (List[str]): The results of scan_results().
  - offset (int): The number to offset the player level. Defaults to 0.
- Returns:
  - str: The highest maximum capital node that can be hacked under the user's level + the offset.

---

## zero_money

### Runnable:

- Prints every the level, followed by the name of every node that has no money.

### Library

- Args:
  - ns
  - scan_results (List[str]): The results of scan_results().
- Returns:
  - List(str): The name of every node that has no money.

---

## zero_ram

### Runnable:

- Prints the name of every node that has no ram.

### Library:

- Args:
  - ns
  - scan_results (List[str]): The results of scan_results().
  - scripts_ram (int): The ram threshold before a node is considered to have no ram. Defaults to 1.6.
- Returns
  - List(str): The name of every node that has no ram.

---

## deleteServers

### Runnable:

- Deletes all purchased servers under the naming scheme pserv-{0-24}.

### Library:

- Args:
  - ns

---

## getpaid

### Runnable:

- Weakens, grows, and hacks a node depending on it's state.

- Args:
  - target (str): The node to target.
  - money_threshold (int): If the node's current money is below this, the script will grow the node.
  - security_threshold (int): If the node's current security is above this, the script will weaken the node.

### Library:

- Args:
  - ns
  - target (str): The node to target.
  - money_threshold (int): If the node's current money is below this, the script will grow the node.
  - security_threshold (int): If the node's current security is above this, the script will weaken the node.

---

## wrapper_getpaid

### Runnable

- Runs getpaid from the command-line and auto-fills values for money_threshold and security_threshold depending on the target node. Also auto-fills the amount of threads to run getpaid with.

- Args
  - target (str): The node to target. Defaults auto_highest_capital().

---

## serverPriceEstimate

### Runnable

- Finds the maximum server farm price you can afford and prints various information on those servers and their capabilities.

- Args
  - ram_multiplier: Multiplies the server ram by x factors of two.

---

## botnet.js

### Runnable
