#
# ~/.bashrc
#

# If not running interactively, don't do anything
[[ $- != *i* ]] && return

run_scripts()
{
  for script in $1/*; do

    # skip non-executable snippets
    [ -x "$script" ] || continue

    # execute $script in the context of the current shell
    . $script
  done
}

run_scripts ~/.bashrc.d
