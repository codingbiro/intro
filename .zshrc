# Custom zsh prompt
NEWLINE=$'\n'
DATE=$( date +"[%Y-%m-%d %H:%M:%S]" )
PROMPT="${NEWLINE}%F{yellow}${DATE} %(!.%F{red}.%F{white})%n%F{cyan}@%m 
%F{yellow}%d${NEWLINE}%F{reset}> "

# Custom function which kills process for given port
function killportfn() {
  lsof -i tcp:$1 | awk -v i=2 -v j=2 'FNR==i {print $j}' | xargs kill -KILL;
}
alias killport='killportfn'
